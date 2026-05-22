import OwnerBoard from "@/ui/OwnerBoard";
import React from "react";

const MyRequestPage = () => {
  return (
    <section className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-base-content">
            My Requests
          </h1>

          <p className="text-base-content/70 mt-2">
            Manage all adoption requests for your pets.
          </p>
        </div>

        {/* Board Section */}
        <div className="bg-base-100 rounded-2xl shadow-md p-5 md:p-8">
          <OwnerBoard />
        </div>
      </div>
    </section>
  );
};

export default MyRequestPage;