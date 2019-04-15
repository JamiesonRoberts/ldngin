<?php

namespace App\Listeners;

use App\Events\MemberRegistration;
use App\Mail\SubscriptionNotification;
use Illuminate\Support\Facades\Mail;

class SendNotification
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
        Mail::to(env('NOTIFICATION_EMAIL'))->send(new SubscriptionNotification($event->submission));
    }
}
