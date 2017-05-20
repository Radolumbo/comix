var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Comic = new keystone.List('Comic');

Comic.add({
    title: { type: Types.Text, required: true, initial: true },
    description: { type: Types.Text, required: true, initial: true },
    image: { type: Types.CloudinaryImage, initial: true, publicID: 'comic_num' },
    comic_num: { type: Types.Number, initial: true, required: true, index: true },
    publish_date: {type: Types.Datetime, default: Date.now}
});

/**
 * Registration
 */
Comic.defaultColumns = 'comic_num, title, description, image';
Comic.register();
