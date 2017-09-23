import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-skill',
  templateUrl: './search-skill.component.html',
  styleUrls: ['./search-skill.component.css']
})
export class SearchSkillComponent implements OnInit {
  info = [
    {
      'title' : '狗狗--dog',
      'imag' : '',
      'smalltitle' : '领养中心',
      'detail' : '一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴',

    },
    {
      'title' : '狗狗--dog',
      'imag' : '',
      'smalltitle' : '领养中心',
      'detail' : '一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴',

    },
    {
      'title' : '狗狗--dog',
      'imag' : '',
      'smalltitle' : '领养中心',
      'detail' : '一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴',

    },
    {
      'title' : '狗狗--dog',
      'imag' : '',
      'smalltitle' : '领养中心',
      'detail' : '一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴',

    },
    {
      'title' : '狗狗--dog',
      'imag' : '',
      'smalltitle' : '领养中心',
      'detail' : '一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴',

    },
    {
      'title' : '狗狗--dog',
      'imag' : '',
      'smalltitle' : '领养中心',
      'detail' : '一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴一对流浪狗露宿街头 互相拥抱相依为伴',

    },

  ]
  skill = [
    {
      'title' : '狗狗--dog',
      'skilltitle' : '哈士奇能不能吃海鲜？',
      'skliidetail' : '关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜， 咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题， 哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈 士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
    },
    {
      'title' : '狗狗--dog',
      'skilltitle' : '哈士奇能不能吃海鲜？',
      'skliidetail' : '关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜， 咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题， 哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈 士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
    },
    {
      'title' : '狗狗--dog',
      'skilltitle' : '哈士奇能不能吃海鲜？',
      'skliidetail' : '关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜， 咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题， 哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈 士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
    },
    {
      'title' : '狗狗--dog',
      'skilltitle' : '哈士奇能不能吃海鲜？',
      'skliidetail' : '关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜， 咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题， 哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈 士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
    },
    {
      'title' : '狗狗--dog',
      'skilltitle' : '哈士奇能不能吃海鲜？',
      'skliidetail' : '关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜， 咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题， 哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈 士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
    },
    {
      'title' : '狗狗--dog',
      'skilltitle' : '哈士奇能不能吃海鲜？',
      'skliidetail' : '关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜， 咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题， 哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈 士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
    },
    {
      'title' : '狗狗--dog',
      'skilltitle' : '哈士奇能不能吃海鲜？',
      'skliidetail' : '关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜， 咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题， 哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈 士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
    },
    {
      'title' : '狗狗--dog',
      'skilltitle' : '哈士奇能不能吃海鲜？',
      'skliidetail' : '关于在沿海城市生活的咱们，海鲜是每日生活中不可少的好菜， 咱们在养哈士奇的时候，应当留意哈士奇吃海鲜的问题， 哈士奇是十分贪吃的家伙，但是咱们要知道海鲜是不是合适哈 士奇吃的，这样才能确保哈士奇吃到海鲜今后不会有不良反应。',
    },
  ]
  history = [
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
    {
      'name' : '狗狗',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
