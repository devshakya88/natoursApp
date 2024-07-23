const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  //1. Get Tour data from Collection
  const tours = await Tour.find();
  //2. Build Template
  //3. Render that template using tour data from //1
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res) => {
  //1. Get The data, for the required tour(including reviews and guide)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  //2. Build template
  //3. Render template using the data from 1.
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
    tour,
  });
});

//Some change in ViewControlller
