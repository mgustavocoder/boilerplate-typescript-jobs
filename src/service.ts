export class LoremIpsum {
  public static getLoremIpsum (count: number): string {
    let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    loremIpsum += 'Sed erat magna, consequat a efficitur eu, '
    loremIpsum += 'malesuada vitae nisi. In hac habitasse platea dictumst. '
    loremIpsum += 'Aliquam erat volutpat. Donec nec nulla in nunc tincidunt '
    loremIpsum += 'elementum. Vestibulum ante ipsum primis in faucibus orci luctus '
    loremIpsum += 'et ultrices posuere cubilia Curae; Sed at ipsum dictum, '
    loremIpsum += 'sodales urna vitae, ultrices sapien. Nulla facilisi. '
    loremIpsum += 'Integer eget lacus eu libero semper vulputate. '
    loremIpsum += 'Nullam eget justo euismod, lobortis enim in, '
    loremIpsum += 'scelerisque felis. Vestibulum ante ipsum primis in faucibus '
    loremIpsum += 'orci luctus et ultrices posuere cubilia Curae; '
    loremIpsum += 'Nam non tellus diam. Donec tincidunt, tortor quis '
    loremIpsum += 'convallis laoreet, nunc nunc rhoncus tortor, '
    loremIpsum += 'eget dignissim nunc nunc ut nulla. '
    loremIpsum += 'Donec nec nisl in nisl tincidunt posuere. '
    loremIpsum += 'Suspendisse potenti. '
    return loremIpsum.repeat(count)
  }
}
