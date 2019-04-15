<?php

namespace App\Listeners;

use App\Events\MemberRegistration;

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
        //
    }
}
