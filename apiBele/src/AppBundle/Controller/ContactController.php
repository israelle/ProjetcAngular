<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ContactController extends Controller
{
    /**
     * @Route("/joinUs", name="contact")
     */

    /**
     * @param Request $request
     * @param \Swift_Mailer $mailer
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request, \Swift_Mailer $mailer)
    {
        $form = $this->createForm(ContactType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $contactFormData = $form->getData();

                        $message = (new \Swift_Message('You Got Mail!'))
                            ->setFrom($contactFormData['from'])
                          ->setTo('our.own.real@email.address')
                          ->setBody(
                +                   $contactFormData['message'],
                   'text/plain'
            );

          $mailer->send($message);

         return $this->redirectToRoute('contact');
        }

        return $this->render('contact/index.html.twig', [
            'our_form' => $form->createView(),
        ]);
    }
}

