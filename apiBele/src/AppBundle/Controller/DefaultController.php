<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/send")
     */
    public function sendAction()
    {
        $this_is = 'this is';
        $the_message = ' the message of the email';
        $mailer = $this->get('mailer');

        $message = \Swift_Message::newInstance()
            ->setSubject('The Subject for this Message')
            ->setFrom($this->container->getParameter('mailer_user'))
            ->setTo('any_account_name@any_domain.whatever')
            ->setBody($this->renderView('/home', ['this'=>$this_is, 'message'=>$the_message]))
        ;
        $mailer->send($message);
        return new Response('<html><body>The email has been sent successfully!</body></html>');
    }
}
