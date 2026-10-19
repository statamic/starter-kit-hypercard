<?php

namespace App\ViewModels;

use Statamic\Facades\Entry;
use Statamic\View\ViewModel;

class Journal extends ViewModel
{
    public function data(): array
    {
        $entries = Entry::query()
            ->where('collection', 'journal')
            ->where('site', $this->cascade->get('site')->handle())
            ->whereStatus('published')
            ->orderBy('date', 'desc')
            ->orderBy('title', 'asc')
            ->get()
            ->values();

        $currentId = $this->cascade->content()?->id();
        $position = $entries->search(fn ($entry) => $entry->id() === $currentId);
        $isEntry = $position !== false;

        return [
            'journal_entries' => $entries,
            'is_journal_entry' => $isEntry,
            'card_number' => $isEntry ? str_pad((string) ($position + 1), 3, '0', STR_PAD_LEFT) : null,
            'previous_card' => $isEntry && $position > 0 ? $entries->get($position - 1) : null,
            'next_card' => $isEntry ? $entries->get($position + 1) : $entries->first(),
        ];
    }
}
