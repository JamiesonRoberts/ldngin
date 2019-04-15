<?php

namespace App\Mail;

use App\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ThankYou extends Mailable
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
        return $this->view('emails.thankYou')
            ->with(['submission' => $this->submission])
            ->subject('Thank you for subscribing!')
            ->from('no-reply@ldngin.ca')
            ->replyTo(env('NOTIFICATION_EMAIL'));
    }
}
