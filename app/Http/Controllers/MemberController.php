<?php

namespace App\Http\Controllers;

use App\Http\Requests\FormSubmission;
use App\Member;
use GuzzleHttp\Client;

class MemberController extends Controller
{
    //
    public function __invoke(FormSubmission $request)
    {
        $client = new Client();
        $response = $client->post('https://www.google.com/recaptcha/api/siteverify',
            [
                'form_params' => [
                    'secret' => env('RECAPTCHA_SECRET_KEY', false),
                    'response' => $request->get('g-recaptcha-response')
                ]
            ]
        );
3
        $body = json_decode((string) $response->getBody());
        if (!$body->success) {
            return redirect()->back()->withInput();
        };

        dump('form controller');
        dd($request->all());
        Member::create($request->all());

        return redirect()->route('thank-you');
    }
}
