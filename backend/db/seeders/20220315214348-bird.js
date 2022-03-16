'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Birds', [
      {
        common_name: 'Great Horned Owl',
        scientific_name: 'Bubo virginianus',
        family: 'Owls',
        description: 'Large and widespread owl with distinctive ear tufts. Found in a variety of habitats from dense woods to prairie and deserts with at least some trees. Also, found in wooded towns and suburbs. Typically well-camouflaged dark brown overall, but varies in color. Often engages in haunting duets, with males and females hooting back and forth. Preys upon a variety of animals, including mammals, birds and reptiles',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647389984/great_horned_owl_vnu5oc.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647389985/great_horned_owl_hnzqj2.jpg',
        range: 'Found all throughout the Americas, though most densely populated in North America',
        conservation_status: 'Least Concern'
      },
      {
        common_name: 'Fiery-throated Hummingbird',
        scientific_name: 'Panterpe insignis',
        family: 'Hummingbirds',
        description: 'If you see the throat in good light, there is no mistaking this beauty: no other hummingbird combines every color of the rainbow on the throat and breast. In poor light, could be mistaken for other fairly large hummingbirds like Talamanca Hummingbird. Look for dark blue-black tail, medium-length bill with pink at the base, and blue rump, or just wait for it to turn its head. Sexes alike. Found in montane forests and edges, mostly from 1500m to treeline. Frequently visits feeders',
        sounds: 'https://res.cloudinary.com/dd9pletih/video/upload/v1647389983/fiery_throated_hummingbird_g2csua.mp3',
        image: 'https://res.cloudinary.com/dd9pletih/image/upload/v1647389985/fiery_throated_hummingbird_ty9kvh.jpg',
        range: 'Found in Costa Rica and on the western edge of Panama',
        conservation_status: 'Least Concern'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Birds', null, {});
  }
};
