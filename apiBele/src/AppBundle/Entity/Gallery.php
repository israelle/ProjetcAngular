<?php

namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * Class Gallery
 * @ApiResource()
 * @ORM\Table(name="Galerie")
 * @ORM\Entity()
 *
 */
class Gallery
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * * @ORM\Column(name="titre", type="string")
     */
    private $title;

    /**
     * @var integer
     * * @ORM\Column(name="nbPhoto", type="integer")
     */
    private $nbPicture;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_creation", type="date")
     */
    private $date;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title.
     *
     * @param string $title
     *
     * @return Gallery
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set nbPicture.
     *
     * @param int $nbPicture
     *
     * @return Gallery
     */
    public function setNbPicture($nbPicture)
    {
        $this->nbPicture = $nbPicture;

        return $this;
    }

    /**
     * Get nbPicture.
     *
     * @return int
     */
    public function getNbPicture()
    {
        return $this->nbPicture;
    }

    /**
     * Set date.
     *
     * @param \DateTime $date
     *
     * @return Gallery
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date.
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }
}
