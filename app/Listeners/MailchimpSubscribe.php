<?php

namespace App\Listeners;

use App\Events\MemberRegistration;
use GuzzleHttp\Client;

class MailchimpSubscribe
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
     * @param MemberRegistration $event
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function handle(MemberRegistration $event)
    {
        $mailchimpDataCentre = env('MAILCHIMP_API_DATACENTRE');

        $client = new Client([
            'base_uri' => "https://$mailchimpDataCentre.api.mailchimp.com/",
            'auth' => [
                'ldnontgin',
                env('MAILCHIMP_API_KEY')
            ]
        ]);

        $audience = env('MAILCHIMP_AUDIANCE');
        $hash = md5($event->submission->email);

        $client->request(
            'PUT',
            "/3.0/lists/$audience/members/$hash/",
            [
                'json' => [
                    'email_address' => $event->submission->email,
                    'status' => 'subscribed',
                    'merge_fields' => [
                        'FULLNAME' => $event->submission->name
                    ]
                ]
            ]
        );
        $tags = [
            'tags' => [
                [
                    'name' => 'Meetup',
                    'status' => $event->submission->consentNewsletter ? 'active' : 'inactive'
                ],
                [
                    'name' => 'New Gin Announcements',
                    'status' => $event->submission->consentAvailability ? 'active' : 'inactive',
                ]
            ]
        ];
        $client->request(
            'POST',
            "/3.0/lists/$audience/members/$hash/tags",
            [ 'body' => json_encode($tags) ]
        );

    }
}
