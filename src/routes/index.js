import { Router } from "express";
const router = Router();

/*=================================================
Routing*/
router.get("/", (req, res) => res.render("index", { title: 'First Website with Nodejs'}));

router.get("/about", (req, res) => res.render("about", { title: 'About me'}));

router.get("/contact", (req, res) => res.render("contact", { title: 'Contact page'}));

export default router;
