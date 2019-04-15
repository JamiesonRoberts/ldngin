<h1>New subscription</h1>
<p><strong>Name:</strong> {{ $submission->name }}</p>
<p><strong>Email:</strong> {{ $submission->email }}</p>
@if($submission->consentNewsletter)
    <p><strong>Meet-up Newsletter Consent:</strong> Yes</p>
@endif

@if($submission->consentAvailability)
    <p><strong>Gin Availability Newsletter Consent:</strong> Yes</p>
@else
    <p><strong>Gin Availability Newsletter Consent:</strong> No</p>
@endif
