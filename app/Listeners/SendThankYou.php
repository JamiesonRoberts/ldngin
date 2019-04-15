<?php

namespace App\Listeners;

use App\Events\MemberRegistration;
use App\Mail\ThankYou;
use Illuminate\Support\Facades\Mail;

class SendThankYou
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(MemberRegistration $event)
    {
        Mail::to($event->submission->email)->send(new ThankYou($event->submission));
    }
}
