const Blog = require('../models/blog');
//const {uploader, sendEmail} = require('../utils/index');

// @route GET admin/blog
// @desc Returns all blogs
// @access Public
exports.index = async function (req, res) {
    const blogs = await Blog.find({});
    res.status(200).json({blogs});
};


exports.create = (req, res) => {
    // Make sure this account doesn't already exist
    Blog.findOne({title: req.body.title})
        .then(blog => {
            if (blog) return res.status(401).json({message: 'Sorry This title have been used'});

            // Create and save the blog
            const newBlog = new Blog(req.body);
            newBlog.save()
                .then(blog => res.status(200).json({blog: blog}))
                .catch(err => res.status(500).json({message:err.message}));
        })
        .catch(err => res.status(500).json({success: false, message: err.message}));
};

exports.update = async function (req, res) {
    try {
        const update = req.body;
        const id = req.body._id;
        

        //Attempt to upload to cloudinary
        //const result = await uploader(req);
        const blog_ = await Blog.findByIdAndUpdate(id, {$set: update}, {new: true});

        if (!req.file) return res.status(200).json({blog: blog_, message: 'Blog has been updated'});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
