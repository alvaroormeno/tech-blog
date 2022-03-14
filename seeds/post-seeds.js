const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    description: 'Itaque earum rerum hic tenetur a sapiente delectus, ',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    description: 'et quas molestias excepturi sint occaecati ',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    description: 'Sed ut perspiciatis unde omnis iste natus ',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    description: 'Itaque earum rerum hic tenetur a sapiente delectus, ',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    description: 'Itaque earum rerum hic tenetur a sapiente delectus,',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    description: 'ui dolorem ipsum quia dolor sit amet, consectetur, ',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    description: 'ui dolorem ipsum quia dolor sit amet, consectetur, ',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    description: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    description: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    description: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    description: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    description: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    description: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ',
      description: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    description: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    description: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    description: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    description: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
