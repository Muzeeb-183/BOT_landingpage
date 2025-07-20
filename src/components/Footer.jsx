export default function Footer() {
  return (
    <footer
      className="bg-black text-white py-8 px-4 sm:px-6 md:px-10 text-center"
      data-aos="fade-up"
      id="footer"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-base sm:text-lg font-medium">
          &copy; {new Date().getFullYear()} SSM Cashback Bot. All rights reserved.
        </p>
        <p className="text-sm sm:text-base text-gray-400 mt-2">
          Built with ❤️ for students by the SSM Team.
        </p>
      </div>
    </footer>
  );
}
