<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Association;
use AppBundle\Form\AssociationType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\BrowserKit\Request;

/**
 * Class AssociationController
 * @package AppBundle\Controller
 */
class AssociationController extends Controller
{

    /**
     * @Route("/postAssociation")
     */
    public function postAssociation(Request $request)
    {
        $association = new Association();
        $form = $this->createForm(AssociationType::class, $association);

        $data = json_decode($request->getContent(), true);
        dump($data);
        dump($association);
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($association);
        }
    }

}
