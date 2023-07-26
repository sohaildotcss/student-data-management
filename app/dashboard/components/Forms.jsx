import "../style.css";

function Forms() {
  return (
    <div>
      <form
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
        method="POST"
      >
        <input type="hidden" name="oid" value="00D2w00000RpmMA" />
        <input
          type="hidden"
          name="retURL"
          value="http://login.salesforce.com"
        />
        <div className="student-details-form mt-14 flex flex-col items-center">
          <div className="form-header ">
            <h1
              id="student-details"
              className="mb-6 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-bold text-transparent underline"
            >
              Student details
            </h1>
          </div>
          <div className="form-details flex gap-60">
            <div className="wrap flex w-96 flex-col gap-3">
              <label htmlFor="salutation">Salutation:- </label>
              <select
                id="salutation"
                name="salutation"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">--None--</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
              </select>

              <label htmlFor="first_name">First Name:- </label>
              <input
                id="first_name"
                maxlength="40"
                name="first_name"
                size="20"
                type="text"
                placeholder="Sohail"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="last_name">Last Name:- </label>
              <input
                id="last_name"
                maxlength="80"
                name="last_name"
                size="20"
                type="text"
                placeholder="Ahamed"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="branch">Branch:- </label>
              <input
                id="00N2w00000aY2Dn"
                maxlength="30"
                name="00N2w00000aY2Dn"
                size="20"
                type="text"
                placeholder="Computer Science & Engineering"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <label htmlFor="roll-no"> Roll No:- </label>
              <input
                id="00N2w00000aY2E2"
                maxlength="10"
                name="00N2w00000aY2E2"
                size="20"
                type="text"
                placeholder="19RU1A0XXX"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="gender">Gender:-</label>
              <select
                id="00N2w00000aY2EH"
                name="00N2w00000aY2EH"
                title="Gender"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">--None--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>

              <label htmlFor="phone">Phone:- </label>
              <input
                id="phone"
                maxlength="40"
                name="phone"
                size="20"
                type="text"
                placeholder="91XXXXXXXX"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="email">Email:- </label>
              <input
                id="email"
                maxlength="80"
                name="email"
                size="20"
                type="text"
                placeholder="name@example.com"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <label htmlFor="ssc-marks">SSC Marks/ Percentage / G.P.A:-</label>
              <input
                id="00N2w00000aY2EW"
                name="00N2w00000aY2EW"
                size="20"
                type="text"
                placeholder="540 / 97% / 9.7"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="wrap flex w-96 flex-col gap-3">
              <label htmlFor="+2marks">Inter/Diploma Marks:-</label>
              <input
                id="00N2w00000aY2Eb"
                name="00N2w00000aY2Eb"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <label htmlFor="joining-date">Student Joining Date:-</label>
              <span className="dateInput dateOnlyInput">
                <input
                  id="00N2w00000aY2El"
                  name="00N2w00000aY2El"
                  size="12"
                  type="text"
                  placeholder="01/09/2019"
                  className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                />
              </span>

              <label htmlFor="passout-date">Student Passedout Date:-</label>

              <span className="dateInput dateOnlyInput">
                <input
                  id="00N2w00000aY2Gm"
                  name="00N2w00000aY2Gm"
                  size="12"
                  type="text"
                  placeholder="01/09/2019"
                  className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                />
              </span>

              <label htmlFor="street">Street:- </label>
              <textarea
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                id="street"
                name="street"
                type="text"
              ></textarea>

              <label htmlFor="city">City:- </label>
              <input
                id="city"
                maxlength="40"
                name="city"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="zip">Zip/Postal Code:- </label>
              <input
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                id="zip"
                maxlength="20"
                name="zip"
                size="20"
                type="text"
              />

              <label htmlFor="state">State/Province:- </label>
              <input
                id="state"
                maxlength="20"
                name="state"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="country">Country:- </label>
              <input
                id="country"
                maxlength="40"
                name="country"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="student-performance-form mt-14 flex flex-col items-center">
          <div className="form-header">
            <h1
              id="student-performance"
              className="mb-6 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-bold text-transparent underline"
            >
              Student Performance
            </h1>
          </div>
          <div className="form-details flex gap-60">
            <div className="wrap flex w-96 flex-col gap-3">
              <label htmlFor="college-website">College Website:-</label>
              <input
                id="00N2w00000aY2F5"
                maxlength="255"
                name="00N2w00000aY2F5"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="about-student">About Student:-</label>
              <textarea
                id="00N2w00000aY2FF"
                name="00N2w00000aY2FF"
                type="text"
                wrap="soft"
                placeholder="Good / Bad"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              ></textarea>

              <label htmlFor="sem-1">Semester 1:-</label>
              <input
                id="00N2w00000aY2FK"
                name="00N2w00000aY2FK"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="sem-2">Semester 2:-</label>
              <input
                id="00N2w00000aY2FP"
                name="00N2w00000aY2FP"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="sem-3">Semester 3:-</label>
              <input
                id="00N2w00000aY2Fe"
                name="00N2w00000aY2Fe"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="sem-4">Semester 4:-</label>
              <input
                id="00N2w00000aY2Ft"
                name="00N2w00000aY2Ft"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="wrap flex w-96 flex-col gap-3">
              <label htmlFor="sem-5">Semester 5:-</label>
              <input
                id="00N2w00000aY2Fo"
                name="00N2w00000aY2Fo"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="sem-6">Semester 6:-</label>
              <input
                id="00N2w00000aY2G8"
                name="00N2w00000aY2G8"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="sem-7">Semester 7:-</label>
              <input
                id="00N2w00000aY2GD"
                name="00N2w00000aY2GD"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="sem-8">Semester 8:-</label>
              <input
                id="00N2w00000aY2GN"
                name="00N2w00000aY2GN"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="btech-marks">B.Tech Marks:-</label>
              <input
                id="00N2w00000aYbjt"
                name="00N2w00000aYbjt"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="backlogs">Backlogs in all Semesters:-</label>
              <input
                id="00N2w00000aYbjjEAC"
                name="00N2w00000aYbjjEAC"
                rows="25"
                type="text"
                wrap="soft"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="parent-details-form mt-14 flex flex-col items-center">
          <div className="form-header">
            <h1
              id="parent-details"
              className="mb-6 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-bold text-transparent underline"
            >
              Parent Details
            </h1>
          </div>
          <div className="form-details flex gap-60">
            <div className="wrap flex w-96 flex-col gap-3">
              <label htmlFor="parent-name">Parent Name:-</label>
              <input
                id="00N2w00000aY2GS"
                maxlength="30"
                name="00N2w00000aY2GS"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="parent-pn-num">Parent Phone Number:-</label>
              <input
                id="00N2w00000aY2GX"
                maxlength="40"
                name="00N2w00000aY2GX"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />

              <label htmlFor="parent-email">Parent Email Address:-</label>
              <input
                id="00N2w00000aY2Gc"
                maxlength="80"
                name="00N2w00000aY2Gc"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <label htmlFor="parent-occupation">Parent Occupation:-</label>
              <input
                id="00N2w00000aY2Gc"
                maxlength="80"
                name="00N2w00000aY2Gc"
                size="20"
                type="text"
                className="block w-full  rounded-md border border-slate-300 py-2 pl-2 pr-3 shadow-sm placeholder:text-slate-400 placeholder:opacity-0 placeholder:transition-all placeholder:hover:opacity-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="submit mb-6 mt-8 flex items-center justify-center">
          <button
            type="submit"
            name="submit"
            className="rounded-md  border-2 bg-pink-500 p-2 font-semibold tracking-wider text-slate-200 duration-300 ease-in-out hover:border-2 hover:border-pink-500 hover:bg-white hover:text-black  hover:transition "
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
