export class Link {
  m_link: string = '';
  m_icon: string = '';
  m_info: string = '';

  constructor(_link: string, _icon: string, _info: string) {
    this.m_link = _link;
    this.m_icon = _icon;
    this.m_info = _info;
  }
}
