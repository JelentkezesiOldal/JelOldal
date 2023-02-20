<?php

namespace App\Mail;

use Illuminate\Mail\Mailables\Address;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Email extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $emailAdat;
    public function __construct($emailAdat)
    {
        $this->emailAdat = $emailAdat;
    }

    
    // public function build(){
    //     return $this->view('emails.test')->subject('Viccike');
    // }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            //tárgy
            from: new Address('monika@proba.com', 'Multkor Monika'),
            subject: 'Szalézi Ágazati Képzőközpot Beiratkozás',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'emails.test',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [
            //Attachment::fromPath('/path/to/file'),
            //->as('name.pdf')
            // ->withMime('application/pdf'),
        ];
    }
}
