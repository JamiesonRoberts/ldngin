<?php

namespace App\Events;

use App\Member;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MemberRegistration
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $submission;
    /**
     * Create a new event instance.
     *
     * @param Member $submission
     */
    public function __construct(Member $submission)
    {
        $this->submission = $submission;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
