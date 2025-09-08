// make sure you are exporting a FUNCTION
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { name, email }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
