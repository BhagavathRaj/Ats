import React, { useEffect } from 'react';
import LandingPage from '../../LandingPage';

import FooterContent from '../../Footer/FooterContent';
import { useLocation } from 'react-router-dom';

import { dark } from '@mui/material/styles/createPalette';
import GreenButton from '../../Buttons/GreenButton';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DangerButton from '../../Buttons/Danger';
import './kyc.css';

const KycChecklist = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <LandingPage />
      <Box
        style={{
          position: 'relative',
          padding: '0px',
          margin: '0px',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s ease-out 0s',
        }}
      >
        <Box
          sx={{
            width: '80%',
            top: '100px',
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'all 0.3s ease-out 0s',
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid container item spacing={2}>
              <Grid item xs={12} md={12}>
                <h5 style={{ textAlign: 'center' }}>KYC CHECKLIST</h5>
              </Grid>
              <Grid item xs={12}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h5>A. Important Points</h5>
                  <ul>
                    <li>
                      <p>
                        Self-attested copy of PAN card is mandatory for all
                        clients, including Promoters / Partners / Karta /
                        Trustees and whole-time directors and persons authorized
                        to deal in securities on behalf of company/firm/others.
                      </p>
                    </li>
                    <li>
                      <p>
                        Copies of all the documents submitted by the applicant
                        should be self-attested and accompanied by originals for
                        verification. In case the original of any document is
                        not produced for verification, then the copies should be
                        properly attested by entities authorized for attesting
                        the documents, as per the below mentioned list.
                      </p>
                    </li>
                    <li>
                      <p>
                        If any proof of identity or address is in a foreign
                        language, then translation into English is required.
                      </p>
                    </li>
                    <li>
                      <p>
                        Name & address of the applicant mentioned on the KYC
                        form, should match with the documentary proof submitted.
                      </p>
                    </li>
                    <li>
                      <p>
                        If correspondence & permanent address are different,
                        then proofs for both have to be submitted.
                      </p>
                    </li>
                    <li>
                      <p>
                        Sole proprietor must make the application in his
                        individual name & capacity.
                      </p>
                    </li>
                    <li>
                      <p>
                        For non-residents and foreign nationals, (allowed to
                        trade subject to RBI and FEMA guidelines), copy of
                        passport / PIO Card / OCI Card and overseas address
                        proof is mandatory.
                      </p>
                    </li>
                    <li>
                      <p>
                        In case of Merchant Navy NRI’s, Mariner’s declaration or
                        certified copy of CDC (Continuous Discharge Certificate)
                        is to be submitted.
                      </p>
                    </li>
                    <li>
                      <p>
                        For opening an account with Depository participant or
                        Mutual Fund, for a minor, photocopy of the School
                        Leaving Certificate / Mark sheet issued by Higher
                        Secondary Board / Passport of Minor/Birth Certificate
                        must be provided.
                      </p>
                    </li>
                    <li>
                      <p>
                        Politically Exposed Persons (PEP) are defined as
                        individuals who are or have been entrusted with
                        prominent public functions in a foreign country, e.g.,
                        Heads of States or of Governments, senior politicians,
                        senior Government / judicial military officers, senior
                        executives of state-owned corporations, important
                        political party officials, etc.
                      </p>
                    </li>
                    <li>
                      <p>
                        Only relevant supporting is required to be submitted,
                        any additional details / documents may be retained by
                        the intermediary.
                      </p>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h5>
                    B. Proof of Identity(POI):- List of Documents Adminssible as
                    proof of Identity:
                  </h5>
                  <ul>
                    <li>
                      <p>
                        Unique Identification Number (UID) (Aadhaar)/ Passport/
                        Voter ID card/ Driving license.
                      </p>
                    </li>
                    <li>
                      <p>PAN card with photograph.</p>
                    </li>
                    <li>
                      <p>
                        Identity card/ document with applicant’s Photo, issued
                        by any of the following: Central/State Government and
                        its Departments, Statutory/Regulatory Authorities,
                        Public Sector Undertakings, Scheduled Commercial Banks,
                        Public Financial Institutions, Colleges affiliated to
                        Universities, Professional Bodies such as ICAI, ICWAI,
                        ICSI, Bar Council etc., to their Members; and Credit
                        cards/Debit cards issued by Banks.
                      </p>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h5>
                    C. Proof of Address(POA):- List of Documents Adminssible as
                    proof of Address:
                    <small>
                      (*Documents having an expiry date should be valid on the
                      date of submission.)
                    </small>
                  </h5>
                  <ul>
                    <li>
                      <p>
                        Passport / Voters Identity Card / Ration Card /
                        Registered Lease or Sale Agreement of Residence /
                        Driving License / Flat Maintenance bill / Insurance
                        Copy.
                      </p>
                    </li>
                    <li>
                      <p>
                        Utility bills like Telephone Bill (only land line),
                        Electricity bill or Gas bill - Not more than 2 months
                        old.
                      </p>
                    </li>
                    <li>
                      <p>
                        Bank Account Statement / Passbook - Not more than 3
                        months old.
                      </p>
                    </li>
                    <li>
                      <p>
                        Self-declaration by High Court and Supreme Court judges,
                        giving the new address in respect of their own accounts.
                      </p>
                    </li>
                    <li>
                      <p>
                        Proof of address issued by any of the following: Bank
                        Managers of Scheduled Commercial Banks / Scheduled
                        Co-Operative Bank / Multinational Foreign Banks /
                        Gazette Officer / Notary public / Elected
                        representatives to the Legislative Assembly / Parliament
                        / Documents issued by any Govt. or Statutory Authority.
                      </p>
                    </li>
                    <li>
                      <p>
                        Identity card/document with address, issued by any of
                        the following: Central/State Government and its
                        Departments. Statutory/ Regulatory Authorities, Public
                        Sector Undertakings, Scheduled Commercial Banks, Public
                        Financial Institutions, Colleges affiliated to
                        Universities and Professional Bodies such as ICAI,
                        ICWAI, ICSI, Bar Council etc., to their members.
                      </p>
                    </li>
                    <li>
                      <p>
                        For FII / sub account, Power of Attorney given by FII /
                        sub-account to the Custodians (which are duly notarized
                        and / or apostilled or consulars) that gives the
                        registered address should be taken.
                      </p>
                    </li>
                    <li>
                      <p>
                        The proof of address in the name of the spouse may be
                        accepted.
                      </p>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h5>
                    D. Exemption/Clarifications to PAN:
                    <small>
                      (*Sufficient documentary evidence in support of such
                      claims to be collected.)
                    </small>
                  </h5>
                  <ul>
                    <li>
                      <p>
                        In case of transactions undertaken on behalf of Central
                        Government and/or State Government and by officials
                        appointed by Courts e.g., Official liquidator, Court
                        receiver etc.
                      </p>
                    </li>
                    <li>
                      <p>Investors residing in the state of Sikkim.</p>
                    </li>
                    <li>
                      <p>
                        UN entities / multilateral agencies exempt from paying
                        taxes/filing tax returns in India.
                      </p>
                    </li>
                    <li>
                      <p>SIP of Mutual Funds up to Rs 50, 000/- p.a.</p>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {/* <Box width="100%" bgcolor="lightblue" height="100px"></Box> */}
                <Box>
                  <h5>E. List of People Authorized to Attest the Documents</h5>
                  <ul>
                    <li>
                      <p>
                        Notary Public, Gazetted Officer, Manager of a Scheduled
                        Commercial / Co-operative Bank or Multinational Foreign
                        Banks (Name, Designation & Seal should be affixed on the
                        copy).
                      </p>
                    </li>
                    <li>
                      <p>
                        In case of NRIs, authorized officials of overseas
                        branches of Scheduled Commercial Banks registered in
                        India, Notary Public, Court Magistrate, Judge, Indian
                        Embassy / Consulate General in the country where the
                        client resides are permitted to attest the documents.
                      </p>
                    </li>
                    <li>
                      <p>
                        UN entities / multilateral agencies exempt from paying
                        taxes/filing tax returns in India.
                      </p>
                    </li>
                    <li>
                      <p>SIP of Mutual Funds up to Rs 50, 000/- p.a.</p>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <h5>
                    F. In case of non-Individuals, additional documents to be
                    obtained from non-individuals, over & above the POI & POA,
                    as mentioned below:
                  </h5>
                  <table
                    className="kyc"
                    style={{
                      display: 'block',
                      width: '100%',
                      overflowX: 'auto',
                      color: '#212529',
                      borderCollapse: 'collapse',
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            width: '20%',
                            fontWeight: 400,
                            color: '#707070',
                            borderBottom: '2px solid #dee2e6',
                            borderTop: '1px solid #dee2e6',
                          }}
                        >
                          Types of Entity
                        </th>
                        <th
                          style={{
                            width: '80%',
                            fontWeight: 400,
                            color: '#707070',
                            borderBottom: '2px solid #dee2e6',
                            borderTop: '1px solid #dee2e6',
                          }}
                        >
                          Documentry Requirements
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Corporate</td>
                        <td>
                          <ul>
                            <li>
                              <p>
                                Copy of the balance sheets for the last 2
                                financial years (to be submitted every year).
                              </p>
                            </li>
                            <li>
                              <p>
                                Copy of latest share holding pattern including
                                list of all those holding control, either
                                directly or indirectly, in the company in terms
                                of SEBI takeover Regulations, duly certified by
                                the company secretary/Whole time director/MD (to
                                be submitted every year).
                              </p>
                            </li>
                            <li>
                              <p>
                                Photograph, POI, POA, PAN and DIN numbers of
                                whole-time directors/two directors in charge of
                                day-to-day operations.
                              </p>
                            </li>
                            <li>
                              <p>
                                Copies of the Memorandum and Articles of
                                Association and certificate of incorporation.
                              </p>
                            </li>
                            <li>
                              <p>
                                Copy of the Board Resolution for investment in
                                securities market.
                              </p>
                            </li>
                            <li>
                              <p>
                                Authorised signatories list with specimen
                                signatures.
                              </p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Partnership Firm</td>
                        <td>
                          <ul>
                            <li>
                              <p>
                                Copy of the balance sheets for the last 2
                                financial years (to be submitted every year).
                              </p>
                            </li>
                            <li>
                              <p>
                                Certificate of registration (for registered
                                partnership firms only).
                              </p>
                            </li>
                            <li>
                              <p>Copy of partnership deed.</p>
                            </li>
                            <li>
                              <p>
                                Authorised signatories list with specimen
                                signatures.
                              </p>
                            </li>
                            <li>
                              <p>Photograph, POI, POA, PAN of Partners.</p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Trust</td>
                        <td>
                          <ul>
                            <li>
                              <p>
                                Copy of the balance sheets for the last 2
                                financial years (to be submitted every year).
                              </p>
                            </li>
                            <li>
                              <p>
                                Certificate of registration (for registered
                                trust only).
                              </p>
                            </li>
                            <li>
                              <p>Copy of Trust deed.</p>
                            </li>
                            <li>
                              <p>
                                List of trustees certified by managing
                                trustees/CA.
                              </p>
                            </li>
                            <li>
                              <p>Photograph, POI, POA, PAN of Trustees.</p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>HUF</td>
                        <td>
                          <ul>
                            <li>
                              <p>PAN of HUF.</p>
                            </li>
                            <li>
                              <p>
                                Deed of declaration of HUF/ List of coparceners.
                              </p>
                            </li>
                            <li>
                              <p>
                                Bank pass-book/bank statement in the name of
                                HUF.
                              </p>
                            </li>
                            <li>
                              <p>Photograph, POI, POA, PAN of Karta.</p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Unincorporated association or a body of individuals
                        </td>
                        <td>
                          <ul>
                            <li>
                              <p>Proof of Existence/Constitution document.</p>
                            </li>
                            <li>
                              <p>
                                Resolution of the managing body & Power of
                                Attorney granted to transact business on its
                                behalf.
                              </p>
                            </li>
                            <li>
                              <p>
                                Authorized signatories list with specimen
                                signatures.
                              </p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Banks/Institutional Investors</td>
                        <td>
                          <ul>
                            <li>
                              <p>
                                Copy of the constitution/registration or annual
                                report/balance sheet for the last 2 financial
                                years.
                              </p>
                            </li>
                            <li>
                              <p>
                                Authorized signatories list with specimen
                                signatures.
                              </p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Foreign Institutional Investors (FII)</td>
                        <td>
                          <ul>
                            <li>
                              <p>Copy of SEBI registration certificate.</p>
                            </li>
                            <li>
                              <p>
                                Authorized signatories list with specimen
                                signatures.
                              </p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Army/Government Bodies</td>
                        <td>
                          <ul>
                            <li>
                              <p>Self-certification on letterhead.</p>
                            </li>
                            <li>
                              <p>
                                Authorized signatories list with specimen
                                signatures.
                              </p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Registered Society</td>
                        <td>
                          <ul>
                            <li>
                              <p>
                                Copy of Registration Certificate under Societies
                                Registration Act.
                              </p>
                            </li>
                            <li>
                              <p>List of Managing Committee members.</p>
                            </li>
                            <li>
                              <p>
                                Committee resolution for persons authorised to
                                act as authorised signatories with specimen
                                signatures.
                              </p>
                            </li>
                            <li>
                              <p>
                                True copy of Society Rules and Bye Laws
                                certified by the Chairman/Secretary.
                              </p>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>NRI</td>
                        <td>
                          <p>
                            Apart from Account Opening Form* Following are the
                            Mandatory documents for opening PIS, Trading and
                            Demat Account.
                          </p>
                          <ul>
                            <li>
                              <p>Passport Copy**</p>
                            </li>
                            <li>
                              <p>Valid Visa Copy</p>
                            </li>
                            <li>
                              <p>
                                Pan Card (It is mandatory irrespective of
                                residential status.)
                              </p>
                            </li>
                            <li>
                              <p>
                                Identity Proof (Pan card, Driving license, Voter
                                card, Overseas Citizen of India card).
                              </p>
                            </li>
                            <li>
                              <p>
                                Overseas Address Proof (Driving License, Bank
                                Statement, Lease/Rent Agreement. Utility Bill)
                              </p>
                            </li>
                            <li>
                              <p>
                                Indian Address Proof (Optional for OCI/PIO)
                                (Aadhar Card/Voter ID/Driving License/Bank
                                Statement/Utility bill)
                              </p>
                            </li>
                            <li>
                              <p>
                                Photograph as per Account Opening Form
                                requirement.
                              </p>
                            </li>
                          </ul>
                          <p>
                            In case client does not visit the branch (Non-Face
                            to Face Case) to open these accounts then all
                            photocopies should be attested by customer himself
                            and to be attested by Indian Embassy or by Notary or
                            By Banker Overseas. (This will be applicable for all
                            the documents)
                          </p>
                          <p>
                            * Account opening form and above documents are
                            mandatory to open PIS ,Trading and Demat Account.
                          </p>
                          <p>
                            ** In case of Foreign Passport it need to be
                            accompanied by OCI/PIO Card with matching passport
                            number.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid item sx={{ top: '70px', position: 'relative' }} xs={12} md={6}>
          <FooterContent />
        </Grid>
      </Box>
    </div>
  );
};

export default KycChecklist;
