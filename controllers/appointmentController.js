const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  try {
    const { date, time, description } = req.body;
    const userId = req.user.userId; 

    const appointment = new Appointment({
      date,
      time,
      description,
      userId
    });

    await appointment.save();

    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (error) {
    res.status(500).json({ message: 'Error creating appointment', error: error.message });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const userId = req.user.userId; 
    const appointments = await Appointment.find({ userId });
    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments', error: error.message });
  }
};

exports.getAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const appointment = await Appointment.findOne({ _id: id, userId: userId });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ appointment });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointment', error: error.message });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;
    const { date, time, description } = req.body;

    const appointment = await Appointment.findOneAndUpdate(
      { _id: id, userId: userId },
      { date, time, description },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment updated successfully', appointment });
  } catch (error) {
    res.status(500).json({ message: 'Error updating appointment', error: error.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
     const userId = req.user.userId;

    const appointment = await Appointment.findOneAndDelete({ _id: id, userId: userId });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting appointment', error: error.message });
  }
};