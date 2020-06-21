<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource()
 * Class Logo
 * @ORM\Table(name="logo")
 * @ORM\Entity()
 *
 */
class Logo
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id ;

    /**
     * @ORM\OneToOne(targetEntity="Picture", inversedBy="picture", cascade={"persist"})
     * @ORM\JoinColumn(name="photo_id", referencedColumnName="id")
     */
    private $picture;

    /**
     * @ORM\OneToOne(targetEntity="Association", inversedBy="logo", cascade={"persist"})
     * @ORM\JoinColumn(name="association_id", referencedColumnName="id")
     */
    private $association;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getPicture()
    {
        return $this->picture;
    }

    /**
     * @param mixed $picture
     */
    public function setPicture($picture): void
    {
        $this->picture = $picture;
    }

    /**
     * @return mixed
     */
    public function getAssociation()
    {
        return $this->association;
    }

    /**
     * @param mixed $association
     */
    public function setAssociation($association): void
    {
        $this->association = $association;
    }

}
