<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Association
 *@ApiResource()
 * @ORM\Table(name="association")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\AssociationRepository")
 */
class Association
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"event_get","event_post"})
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, unique=true)
     * @Groups({"event_get","event_post"})
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255)
     * @Groups({"event_get","event_post"})
     */
    private $description;


    /**
     * @ORM\ManyToOne(targetEntity="Picture")
     * @ORM\JoinColumn(name="photo_id", referencedColumnName="id")
     * @Groups({"event_get"})
     */
    private $logo;


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
     * Set name.
     *
     * @param string $name
     *
     * @return Association
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description.
     *
     * @param string $description
     *
     * @return Association
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set logo.
     *
     * @param \AppBundle\Entity\Picture|null $logo
     *
     * @return Association
     */
    public function setLogo(\AppBundle\Entity\Picture $logo = null)
    {
        $this->logo = $logo;

        return $this;
    }

    /**
     * Get logo.
     *
     * @return \AppBundle\Entity\Picture|null
     */
    public function getLogo()
    {
        return $this->logo;
    }
}
