module.exports = {
    handleContactFormSubmission: (req, res) => {
        const { name, email, message } = req.body;

        // Here you would typically validate the input and save it to a database or send an email
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Simulate saving the message or sending an email
        console.log('Contact form submitted:', { name, email, message });

        return res.status(200).json({ success: true, message: 'Message received' });
    }
};