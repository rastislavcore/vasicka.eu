import { MdLocationOn } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { CgDribbble } from 'react-icons/cg';
import { RiPhoneFill, RiMailFill } from 'react-icons/ri';
import { Fragment } from 'react';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaIdBadge,
  FaKey,
  FaSkype,
  FaMastodon,
  FaStackOverflow,
  FaTelegram,
  FaLinkedin,
  FaWallet,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

const isCompanyMention = (company) => {
  return company.startsWith('@') && !company.includes(' ');
};

const companyLink = (company) => {
  return `https://github.com/${company.substring(1)}`;
};

const getFormattedMastodonValue = (mastodonValue, isLink) => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  const mailtoRegex = /^mailto:(.+)\?key=(.+)$/;
  const isMailto = link && link.startsWith("mailto:");
  const mailtoMatches = isMailto ? link.match(mailtoRegex) : null;
  const decodedKeyLink = mailtoMatches ? decodeURIComponent(mailtoMatches[2]) : null;

  return (
    <div className="flex justify-start py-2 px-1 items-center">
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        {icon} {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        {link ? (
          <>
            {isMailto ? (
              <div className="inline-flex space-x-2">
                <a href={`mailto:${mailtoMatches[1]}`} target="_blank" rel="noreferrer">
                  {value}
                </a>
                <a href={decodedKeyLink} target="_blank" rel="noreferrer" download>
                  <FaKey />
                </a>
              </div>
            ) : (
              <a href={link} target="_blank" rel="noreferrer">
                {value}
              </a>
            )}
          </>
        ) : (
          value
        )}
      </div>
    </div>
  );
};

const Details = ({ profile, loading, social, github }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {profile.location && (
                <ListItem
                  icon={<MdLocationOn />}
                  title="Location:"
                  value={profile.location}
                />
              )}
              {profile.company && (
                <div
                  className="flex justify-start py-2 px-1 items-center"
                >
                  <div className="flex-grow font-medium gap-2 flex items-center my-1">
                    <FaBuilding /> Organization:
                  </div>
                  <div
                    className="text-sm font-normal text-right mr-2 ml-3"
                    style={{
                      wordBreak: 'break-word',
                    }}
                  >
                  {profile.company.split(" ").map((company) => {
                    if (isCompanyMention(company.trim())) {
                      return (
                        <a href={companyLink(company.trim())}
                          target="_blank"
                          rel="noreferrer"
                          className="org"
                          key={company}
                          >
                          {company}
                        </a>
                      );
                    } else {
                      return (
                        <span className="org" key={company}>{company}</span>
                      );
                    }
                  })}
                  </div>
                </div>
              )}
              <ListItem
                icon={<AiFillGithub />}
                title="GitHub:"
                value={github.username}
                link={`https://github.com/${github.username}`}
              />
              {social?.corepass && (
                <ListItem
                  icon={<FaIdBadge />}
                  title="CorePass:"
                  value={social.corepass.substring(0,4)+'…'+social.corepass.substring(-4, 4)}
                  link={`corepass:${social.corepass}`}
                />
              )}
              {social?.twitter && (
                <ListItem
                  icon={<SiTwitter />}
                  title="Twitter:"
                  value={`@${social.twitter}`}
                  link={`https://twitter.com/${social.twitter}`}
                />
              )}
              {social?.mastodon && (
                <ListItem
                  icon={<FaMastodon />}
                  title="Mastodon:"
                  value={'@'+getFormattedMastodonValue(social.mastodon, false)}
                  link={getFormattedMastodonValue(social.mastodon, true)}
                />
              )}
              {social?.linkedin && (
                <ListItem
                  icon={<FaLinkedin />}
                  title="LinkedIn:"
                  value={social.linkedin}
                  link={`https://www.linkedin.com/in/${social.linkedin}`}
                />
              )}
              {social?.dribbble && (
                <ListItem
                  icon={<CgDribbble />}
                  title="Dribbble:"
                  value={social.dribbble}
                  link={`https://dribbble.com/${social.dribbble}`}
                />
              )}
              {social?.behance && (
                <ListItem
                  icon={<FaBehanceSquare />}
                  title="Behance:"
                  value={social.behance}
                  link={`https://www.behance.net/${social.behance}`}
                />
              )}
              {social?.facebook && (
                <ListItem
                  icon={<FaFacebook />}
                  title="Facebook:"
                  value={social.facebook}
                  link={`https://www.facebook.com/${social.facebook}`}
                />
              )}
              {social?.instagram && (
                <ListItem
                  icon={<AiFillInstagram />}
                  title="Instagram:"
                  value={social.instagram}
                  link={`https://www.instagram.com/${social.instagram}`}
                />
              )}
              {social?.medium && (
                <ListItem
                  icon={<AiFillMediumSquare />}
                  title="Medium:"
                  value={social.medium}
                  link={`https://medium.com/@${social.medium}`}
                />
              )}
              {social?.dev && (
                <ListItem
                  icon={<FaDev />}
                  title="Dev:"
                  value={social.dev}
                  link={`https://dev.to/${social.dev}`}
                />
              )}
              {social?.cryptohub && (
                <ListItem
                  icon={<FaDev />}
                  title="CRYPTO HUB:"
                  value={social.cryptohub}
                  link={`https://cryptohub.digital/${social.cryptohub}`}
                />
              )}
              {social?.stackoverflow && (
                <ListItem
                  icon={<FaStackOverflow />}
                  title="Stack Overflow:"
                  value={social.stackoverflow.split('/').slice(-1)}
                  link={`https://stackoverflow.com/users/${social.stackoverflow}`}
                />
              )}
              {social?.website && (
                <ListItem
                  icon={<FaGlobe />}
                  title="Website:"
                  value={social.website}
                  link={social.website}
                />
              )}
              {social?.skype && (
                <ListItem
                  icon={<FaSkype />}
                  title="Skype"
                  value={social.skype}
                  link={`skype:${social.skype}?chat`}
                />
              )}
              {social?.telegram && (
                <ListItem
                  icon={<FaTelegram />}
                  title="Telegram"
                  value={social.telegram}
                  link={`https://t.me/${social.telegram}`}
                />
              )}

              {social?.phone && (
                <ListItem
                  icon={<RiPhoneFill />}
                  title="Phone:"
                  value={social.phone}
                  link={`tel:${social.phone}`}
                />
              )}
              {social?.email && (
                <ListItem
                  icon={<RiMailFill />}
                  title="Email:"
                  value={social.email.split("?")[0]}
                  link={`mailto:${social.email}`}
                />
              )}
              {social?.payto && (
                <ListItem
                  icon={<FaWallet />}
                  title="Payto:"
                  value={social.payto.substring(0,8)+'…'+social.payto.substr(-4, 4)}
                  link={`payto://${social.payto}`}
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  social: PropTypes.object.isRequired,
  github: PropTypes.object.isRequired,
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

export default Details;
