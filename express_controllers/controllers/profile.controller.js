export const getProfile = (req, res) => {
    res.json({ controller: "PROFILE", success: true });
};


export const createUser=(req,res)=>{
    res.status(201).json({
        success:true,
        message:"Profile created",
        data:req.body
    });
};