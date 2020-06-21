<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Category;
use AppBundle\Entity\Logo;
use AppBundle\Entity\Picture;
use AppBundle\Form\LogoType;
use AppBundle\Form\PictureType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class LogoController extends Controller
{
    /**
     * @Route("/upload/{name}")
     */
    public function uploadAction(Request $request)
    {
        $logo = new Logo();
        $picture = new Picture();
        $form = $this->createForm(LogoType::class, $logo);
        $form->submit($request->request->all());

        $file = $request->files->get('image');
        $name = $request->request->get('name');
        $picture->setFile($file);
        $picture->setName($name);
        $logo->setPicture($picture);

        if ($logo->getId() != 'null') {
            $em = $this->getDoctrine()->getManager();
            $em->persist($logo);

            $home = $request->server->get('HOME');
            $bkRoot = $home.'\\BK_pictures';
            $directoryAssociation = $bkRoot.'\\'.strtoupper($picture->getName());

            if (!file_exists($bkRoot)) {
                mkdir($bkRoot, 777);
                if (!file_exists($directoryAssociation)) {
                    mkdir($directoryAssociation, 777);
                }
            }
            $file->move($directoryAssociation, $file->getClientOriginalName());
            $fileD = fopen($directoryAssociation.'\\'.$file->getClientOriginalName(), 'r');
            fclose($fileD);

            $picture->setPath($directoryAssociation.'\\'.$file->getClientOriginalName());

            // TODO : gérer les messages d'erreurs
            //if ($picture->getCategory() === null) {
            $category = new Category();
            $picture->setCategory($category);
            $picture->getCategory()->setName('test');
            $picture->getCategory()->setDate(new \DateTime());
            $em->flush();
          //   }
        }

        return new Response($request->getContent());

    }

}