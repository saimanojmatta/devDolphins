type Props = {}
const page = (props: Props) => {
  return (
    <div>
      page
      <div className="mt-10 h-[300px] w-full overflow-hidden rounded-lg lg:mt-0 lg:h-full lg:rounded-none">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.727530524453!2d78.387921!3d17.485648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9102b426ef0b%3A0x6e8a096380c2d00d!2sEdureka%20Learning%20Center%20Kukatpally!5e0!3m2!1sen!2sin!4v1691329787826!5m2!1sen!2sin"
                    width="800" height="800" className="h-full w-full" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

    </div>
  )
}
export default page