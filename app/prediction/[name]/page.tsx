const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
  };
  
  const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
  };
  
  const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
  };
  
  interface Params {
    params: { name: string };
  }
  
  export default async function Page({ params }: Params) {
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);
  
    const [age, gender, country] = await Promise.all([
      ageData,
      genderData,
      countryData,
    ]);
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-400">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-2xl font-bold mb-6 text-center text-gray-800">
            Personal Info
          </div>
          <div className="space-y-4">
            <div className="text-lg text-gray-700">
              <span className="font-semibold">Age:</span> {age?.age}
            </div>
            <div className="text-lg text-gray-700">
              <span className="font-semibold">Gender:</span> {gender?.gender}
            </div>
            <div className="text-lg text-gray-700">
              <span className="font-semibold">Country:</span> {country?.country[0]?.country_id}
            </div>
          </div>
        </div>
      </div>
    );
  }
  