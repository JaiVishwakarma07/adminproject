import User from "../models/user.model.js"
import UserUpdate from "../models/userupdate.model.js"

export const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    await User.findByIdAndDelete(req.params.id)
    res.status(201).send("Deleted!")

}

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(201).send(user)
}

export const getUsers = async (req, res) => {
    const user = await User.find()
    res.status(201).send(user)
}

export const updateUserAdmin = async (req, res) => {
    const user = await UserUpdate.find({ id: req.params.id })
    const username = user.username
    const img = user.img
    const approved = true

    try {
        const updatedUser = User.findByIdAndUpdate(req.params.id, { username, img })
        const updatedUser2 = UserUpdate.findByIdAndUpdate(user._id, { username, img, approved })
        res.status(200).json(updatedUser)
        res.status(200).json(updatedUser2)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

export const updateUser = async (req, res) => {
    const user = await UserUpdate.find({ id: req.params.id })
    if (!user) {
        const newUser = new UserUpdate({
            id: req.params.id,
            ...req.body,
        })
        try {
            const saveUser = await newUser.save();
            res.status(201).json(saveUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        const { username, img } = req.body
        const approved = false
        try {
            const updatedUser2 = UserUpdate.findByIdAndUpdate(user._id, { username, img, approved })
            res.status(200).json(updatedUser2)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }
}
