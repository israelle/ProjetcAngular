<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Picture;
use AppBundle\Form\PictureType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\Date;

class PictureController extends Controller
{
//    /**
//     * @Route("/upload/{name}")
//     */
//    public function uploadAction(Request $request)
//    {
//        $picture = new Picture();
//        $form = $this->createForm(PictureType::class, $picture);
//        $form->submit($request->request->all());
//
//        $file = $request->files->get('image');
//        $picture->setFile($file);
//        if ($picture->getId() != 'null') {
//            $em = $this->getDoctrine()->getManager();
//            $em->persist($picture);
//
//            $home = $request->server->get('HOME');
//            $bkRoot = $home.'\\BK_pictures';
//            $directoryAssociation = $bkRoot.'\\'.strtoupper($picture->getName());
//
//            if (!file_exists($bkRoot)) {
//                mkdir($bkRoot, 777);
//                if (!file_exists($directoryAssociation)) {
//                    mkdir($directoryAssociation, 777);
//                }
//            }
//            $file->move($directoryAssociation, $file->getClientOriginalName());
//            $fileD = fopen($directoryAssociation.'\\'.$file->getClientOriginalName(), 'r');
//            fclose($fileD);
//
//            $picture->setPath($directoryAssociation.'\\'.$file->getClientOriginalName());
//
//            // TODO : gérer les messages d'erreurs
//
//          // if ($picture->getCategory() === null) {
//                $picture->getCategory()->setName('logo');
//                $picture->getCategory()->setDate(new \DateTime());
//                $em->flush();
//          // }
//        }
//
//
//        return new Response($request->getContent());
//
//    }
}
