<?php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 *
 * Class Event
 *
 * @ApiResource(
 *     attributes={"normalization_context"={"groups"={""}}},
 *     itemOperations={
 *         "get"={"method"="GET", "normalization_context"={"groups"={"event_get_item"}}},
 *         "put"={"method"="PUT", "denormalization_context"={"groups"={"event_put"}}},
 *         "delete"={"method"="DELETE"}
 *     },
 *     collectionOperations={
 *         "get"={"method"="GET", "normalization_context"={"groups"={"event_get"}}},
 *           "post"={"method"="POST", "denormalization_context"={"groups"={"event_post"}}}
 *     }
 * )
 *
 * @ORM\Table(name="evenement")
 * @ORM\Entity()
 *
 */
class Event
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"event_get", "event_post"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Association", cascade={"persist"})
     * @Groups({"event_get", "event_post"})

     */
    private $association;

    /**
     * @var string
     * @ORM\Column(name="titre", type="string")
     * @Groups({"event_get", "event_post"})
     */
    private $title;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_de_debut", type="datetime")
     * @Groups({"event_get", "event_post"})
     */
    private $startDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_de_fin", type="datetime")
     * @Groups({"event_get", "event_post"})
     */
    private $endDate;

    /**
     * @var string
     * @ORM\Column(name="description", type="string", length=100)
     * @Groups({"event_get", "event_post"})
     */
    private $description;

    /**
     * @var string
     * @ORM\Column(name="adresse", type="string", length=300)
     * @Groups({"event_get", "event_post"})
     */
    private $address;

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
     * Set title
     *
     * @param string $title
     *
     * @return Event
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set startDate
     *
     * @param \DateTime $startDate
     *
     * @return Event
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * Get startDate
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * Set endDate
     *
     * @param \DateTime $endDate
     *
     * @return Event
     */
    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * Get endDate
     *
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->endDate;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Event
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set address
     *
     * @param string $address
     *
     * @return Event
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set association.
     *
     * @param \AppBundle\Entity\Association|null $association
     *
     * @return Event
     */
    public function setAssociation(\AppBundle\Entity\Association $association = null)
    {
        $this->association = $association;

        return $this;
    }

    /**
     * Get association.
     *
     * @return \AppBundle\Entity\Association|null
     */
    public function getAssociation()
    {
        return $this->association;
    }
}
