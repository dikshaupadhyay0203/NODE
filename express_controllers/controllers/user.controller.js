export const getUsers = (req, res) => {
    res.json({ controller: "USER", success: true });
};


export const createUser=(req,res)=>{
    res.status(201).json({
        success:true,
        message:"User created",
        data:req.body
    });
};