const express=require('express');
const userRoute=require('./user.route');
const coachRoute=require('./coach.route');
const matchRoute=require('./match.route');
const memberRoute=require('./team.member.route');
const teamRoute=require('./team.route');
const contactRoute=require('./contact.route');
const founderRoute=require('./founder.route');
const historyRoute=require('./history.route');
const tournamentRoute=require('./tournament.route');
const tokenRoute=require('./token.route');
const galleryRoute=require('./gallery.route');
// console.log("🚀 ~ file: index.js:11 ~ tournamentRoute:", tournamentRoute)

const router = express.Router();

router.use('/user',userRoute);
router.use('/coach',coachRoute);
router.use('/match',matchRoute);
router.use('/member',memberRoute);
router.use('/team',teamRoute);
router.use('/contact',contactRoute);
router.use('/founder',founderRoute);
router.use('/history',historyRoute);
router.use('/tournament',tournamentRoute);
router.use('/token',tokenRoute);
router.use('/gallery',galleryRoute);

module.exports=router;
