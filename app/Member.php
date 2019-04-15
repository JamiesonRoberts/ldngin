<?php

namespace App;

use App\Events\MemberRegistration;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Member extends Model
{
    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'consentNewsletter',
        'consentAvailability',
        'g-recaptcha-response'
    ];

    protected $dispatchesEvents = [
        'created' => MemberRegistration::class,
    ];
}
