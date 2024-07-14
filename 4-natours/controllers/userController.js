const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const User = require('./../models/userModel');
const AppError = require('./../utils/appError');

const filterObj = (obj, ...allowedFields) => {};

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    result: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This Route is not for password updates. Please use /updateMyPassword',
        400,
      ),
    );
  }

  //2, Update User Document
  const filteredBody = filterObj(req.body, 'name', 'email');
  const updatedUser = await User.findById(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  user.name = 'Devender';
  await user.save();

  res.status(200).json({
    status: 'success',
  });
});

exports.createUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This Route is not yet defined!',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This Route is not yet defined!',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This Route is not yet defined!',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This Route is not yet defined!',
  });
};
