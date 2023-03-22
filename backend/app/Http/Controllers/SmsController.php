<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;
use App\Models\Person;

class SmsController extends Controller
{
    public function index()
    {
        return view('send-sms');
    }


    public function sendMessage(Request $request)
    {
        $tomorrow = date("Y-m-d", strtotime('+1 days'));
        $data = Person::select('dateprochaine','num_tel','name')->where('dateprochaine','=',$tomorrow)->get();
        if ($data->value('dateprochaine') != NULL) {
            try {
                $accountSid = getenv("TWILIO_SID");
                $authToken = getenv("TWILIO_AUTH_TOKEN");
                $twilioNumber = getenv("TWILIO_NUMBER");

                $client = new Client($accountSid, $authToken);

                $client->messages->create('+222 34 50 37 10', [
                    'from' => $twilioNumber,
                    'body' => $data->value('name')
                ]);
                return back()->with('success', 'Sms has been successfully sent.');
            } catch (\Exception $e) {
                dd($e->getMessage());
                return back()
                    ->with('error', $e->getMessage());
            }
        } else {
            return back()->with('error', 'No rendez-vous found');
        }
    }

    }


