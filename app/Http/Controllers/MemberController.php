<?php

namespace App\Http\Controllers;

use App\Http\Requests\FormSubmission;
use App\Member;

class MemberController extends Controller
{
    //
    public function __invoke(FormSubmission $request)
    {
        Member::create($request->all());

        return redirect()->route('thank-you');
    }
}
