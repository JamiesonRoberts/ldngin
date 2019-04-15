<?php

namespace App\Mail;

use App\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SubscriptionNotification extends Mailable
{
    use Queueable, SerializesModels;

    protected $submission;

    /**
     * Create a new message instance.
     *
     * @return void
     * @param Member $submission
     */
    public function __construct(Member $submission)
    {
        $this->submission = $submission;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.notify')
            ->with(['submission' => $this->submission])
            ->subject('New Subscription')
            ->from('no-reply@ldngin.ca')
            ->replyTo($this->submission->email);
    }
}
