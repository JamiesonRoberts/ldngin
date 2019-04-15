<?php

namespace App\Providers;

use App\Events\MemberRegistration;
use App\Listeners\MailchimpSubscribe;
use App\Listeners\SendNotification;
use App\Listeners\SendThankYou;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        MemberRegistration::class => [
            MailchimpSubscribe::class,
            SendNotification::class,
            SendThankYou::class
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
