import TeamMemberCard from '../components/TeamMemberCard';

const team = [
    {
        name: "Şura Karaali",
        title: "Frontend Stajyeri",
        imageSrc: "/image/law.png",
        linkedinUrl: "https://linkedin.com/in/surakaraali"
    }
    ,
    {
        name: 'Oktay Şener',
        title: 'Yönetici Ortak',
        imageSrc: '/team/oktay.jpg',
        linkedinUrl: 'https://linkedin.com/in/oktaysener'
    },
    // Diğer üyeler buraya !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
];

export default function EkibimizPage() {
    return (
        <section className="py-20 bg-white">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-rose-800 mb-4">Ekibimiz</h1>
                <p className="text-gray-700 max-w-xl mx-auto">
                    Ekip olarak dinamik ve yenilikçi bir ruhla çalışıyoruz. İşimize olan sevgimiz ve birliğimizle güçleniyoruz.
                </p>
            </div>
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                ))}
            </div>
        </section>
    );
}
