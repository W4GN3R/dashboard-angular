export class Heart {
  constructor(
    public full: boolean,
    public urlHeartFull: string = "/assets/coracao_cheio.png",
    public urlHeartEmpty: string = "/assets/coracao_vazio.png",
  ) {}

  public liveHeart() {
    if (this.full) {
      return this.urlHeartFull
    } else {
      return this.urlHeartEmpty
    }
  }

}
