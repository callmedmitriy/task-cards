class InfoCard {
  constructor (id, title, description, image, link = '#') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}

export default InfoCard;