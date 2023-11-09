import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { DataView } from "primereact/dataview";
import { Dropdown } from "primereact/dropdown";
import {
  Paginator,
  PaginatorCurrentPageReportOptions,
  PaginatorNextPageLinkOptions,
  PaginatorPageChangeEvent,
  PaginatorPageLinksOptions,
  PaginatorPrevPageLinkOptions,
  PaginatorRowsPerPageDropdownOptions,
  PaginatorTemplateOptions,
} from "primereact/paginator";
import { classNames } from "primereact/utils";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import * as Icons from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { EResponseCodes } from "../constants/api.enum";
import { AppContext } from "../contexts/app.context";
import useCrudService from "../hooks/crud-service.hook";
import { useWidth } from "../hooks/use-width";
import { ITableAction, ITableElement } from "../interfaces/table.interfaces";
import { IPagingData } from "../utils/api-response";
import Svgs from "../../public/images/icons/svgs";
import moment from "moment";
import { DateTime } from "luxon";

interface IProps<T> {
  url: string;
  emptyMessage?: string;
  title?: string;
  columns: ITableElement<T>[];
  actions?: ITableAction<T>[];
  searchItems?: object;
  isShowModal: boolean;
  titleMessageModalNoResult?: string;
  descriptionModalNoResult?: string;
  setPaginateData?: any;
}

interface IRef {
  loadData: (newSearchCriteria?: object) => void;
}

const TableComponent = forwardRef<IRef, IProps<any>>((props, ref) => {
  const {
    title,
    columns,
    actions,
    url,
    titleMessageModalNoResult,
    descriptionModalNoResult,
    isShowModal,
    emptyMessage = "No hay resultados.",
    setPaginateData,
  } = props;

  // States
  const [charged, setCharged] = useState<boolean>(false);
  const [resultData, setResultData] = useState<IPagingData<any>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [perPage, setPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [first, setFirst] = useState<number>(0);
  const [searchCriteria, setSearchCriteria] = useState<object>();
  const { width } = useWidth();
  const { setMessage } = useContext(AppContext);

  // ============================================
  // REMOVE THIS BECAUSE IS ONLY PARTIAL SOLUTION
  useEffect(() => {
    setPaginateData({ page, perPage });
  }, [page, perPage]);
  // ============================================

  // Declaraciones
  const { post } = useCrudService(url);
  useImperativeHandle(ref, () => ({
    loadData: loadData,
  }));

  // Metodo que hace la peticion para realizar la carga de datos
  async function loadData(
    newSearchCriteria?: object,
    currentPage?: number
  ): Promise<void> {
    setLoading(true);
    if (newSearchCriteria) {
      setSearchCriteria(newSearchCriteria);
    }
    const body = newSearchCriteria || searchCriteria || {};
    const res = await post<IPagingData<any>>(url, {
      ...body,
      page: currentPage || 1,
      perPage: perPage,
    });
    try {
      if (res.operation.code === EResponseCodes.OK) {
        setResultData(res.data);
        if (res.data.array.length <= 0 && isShowModal) {
          setMessage({
            title: `${titleMessageModalNoResult || ""}`,
            show: true,
            description: `${descriptionModalNoResult}` || "",
            okTitle: "Aceptar",
            background: true,
          });
        }
      } else {
        setMessage({
          title: `Error en la consulta de datos`,
          show: true,
          description: res.operation.message,
          okTitle: "Aceptar",
          background: true,
          onOk: () => {
            setMessage({});
          },
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  // Metodo que alamacena el el estado del paginador
  function onPageChange(event: PaginatorPageChangeEvent): void {
    setPerPage(event.rows);
    setFirst(event.first);
    setPage(event.page);
  }

  useEffect(() => {
    if (charged) loadData(undefined, page + 1);
  }, [perPage, first, page]);

  useEffect(() => {
    setCharged(true);

    return () => {
      setCharged(false);
    };
  }, []);

  // const mobilTemplate = (item: any) => {
  //   return (
  //     <div className="card-grid-item">
  //       <div className="card-header">
  //         {columns.map((column) => {
  //           const properties = column.fieldName.split(".");
  //           let field = item[properties[0]];
  //           properties.length >= 2 &&
  //             properties.forEach((prop, index) => {
  //               if (index === 0) return;
  //               field = field[prop];
  //             });
  //           return (
  //             <div key={item} className="item-value-container">
  //               <p className="text-black bold">{column.header}</p>
  //               <p> {column.renderCell ? column.renderCell(item) : field} </p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //       <div className="card-footer">
  //         {actions.map((action, index) => (
  //           <div key={index} onClick={() => action.onClick(item)}>
  //             {action.customIcon ? (
  //               <div className="button grid-button button-link">
  //                 {action.customIcon()}
  //               </div>
  //             ) : typeof action.icon === "function" ? (
  //               (() => {
  //                 const iconResult = action.icon(item);
  //                 return getIconElement(iconResult, "src");
  //               })()
  //             ) : (
  //               (() => {
  //                 return getIconElement(action.icon, "src");
  //               })()
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  useImperativeHandle(ref, () => ({
    loadData: loadData,
    emptyData: EmptyData,
  }));

  async function EmptyData(): Promise<void> {
    setLoading(true);
    setResultData({ array: [], meta: { total: 0 } });
    setLoading(false);
  }

  if (resultData && resultData.array && resultData.array.length > 0) {
    return (
      <div className="card-user">
        <div className="spc-common-table">
          {title && <div className="spc-table-title">{title}</div>}
          <>
            <Paginator
              className="between spc-table-paginator"
              template={paginatorHeader}
              first={first}
              rows={perPage}
              totalRecords={resultData?.meta?.total || 0}
              onPageChange={onPageChange}
              leftContent={leftContent}
            />
            {width && (
              <DataTable
                className="spc-table full-height"
                value={resultData?.array || []}
                loading={loading}
                scrollable={true}
                emptyMessage={emptyMessage}
              >
                {columns.map((col) => (
                  <Column
                    key={col.fieldName}
                    field={col.fieldName}
                    header={col.header}
                    body={col.renderCell}
                    style={{ fontSize: "0.8em" }}
                  />
                ))}

                {actions && (
                  <Column
                    className="spc-table-actions"
                    header={
                      <div>
                        <div className="spc-header-title">Acción</div>
                      </div>
                    }
                    body={(row) => (
                      <ActionComponent row={row} actions={actions} />
                    )}
                  />
                )}
              </DataTable>
            )}

            <Paginator
              className="spc-table-paginator"
              template={paginatorFooter}
              first={first}
              rows={perPage}
              totalRecords={resultData?.meta?.total || 0}
              onPageChange={onPageChange}
            />
          </>
        </div>
      </div>
    );
  }
});

function getIconElement(icon: string, element: "name" | "src") {
  switch (icon) {
    case "Detail":
      return element == "name" ? (
        "Detalle"
      ) : (
        <Icons.FaEye className="button grid-button button-detail" />
      );
    case "Edit":
      return element == "name" ? (
        "Editar"
      ) : (
        <Icons.FaPencilAlt className="button grid-button button-edit" />
      );
    case "Delete":
      return element == "name" ? (
        "Eliminar"
      ) : (
        <Icons.FaTrashAlt className="button grid-button button-delete" />
      );
    case "Link":
      return element == "name" ? (
        "Vincular"
      ) : (
        <Icons.FaLink className="button grid-button button-link" />
      );
    case "Profile":
      return element == "name" ? (
        "Vincular"
      ) : (
        <ImProfile className="button grid-button button-link" />
      );
    case "Activate":
      return element == "name" ? (
        "Activar"
      ) : (
        <Icons.FaCheck className="button grid-button button-edit" />
      );
    case "Deactivate":
      return element == "name" ? (
        "Desactivar"
      ) : (
        <Icons.FaTimes className="button grid-button button-delete" />
      );
    case "Pdf":
      return element == "name" ? (
        "Pdf"
      ) : (
        <Icons.FaRegFilePdf className="button grid-button button-pdf color-icon-pdf" />
      );
    case "view":
      return element == "name" ? (
        "Pdf"
      ) : (
        <div className="pointer">
          <Svgs svg="view" />
        </div>
      );
    default:
      return "";
  }
}

let leftContent = (
  <p className="header-information text-black bold medium">
    Resultados de búsqueda
  </p>
);
// Metodo que retorna el icono o nombre de la accion

const paginatorHeader: PaginatorTemplateOptions = {
  layout: "CurrentPageReport RowsPerPageDropdown",
  CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
    return (
      <>
        <p className="header-information text-black bold medium">
          Total de resultados
        </p>
        <p className="header-information text-three bold big">
          {options.totalRecords}
        </p>
      </>
    );
  },
  RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
    const dropdownOptions = [
      { label: 10, value: 10 },
      { label: 30, value: 30 },
      { label: 50, value: 50 },
      { label: 100, value: 100 },
    ];

    return (
      <React.Fragment>
        <p className="header-information text-black bold medium">
          Registros por página{" "}
        </p>
        <Dropdown
          value={options.value}
          className="header-information"
          options={dropdownOptions}
          onChange={options.onChange}
        />
      </React.Fragment>
    );
  },
};

const paginatorFooter: PaginatorTemplateOptions = {
  layout: "PrevPageLink PageLinks NextPageLink",
  PrevPageLink: (options: PaginatorPrevPageLinkOptions) => {
    return (
      <button
        type="button"
        className={classNames(options.className, "border-round")}
        onClick={options.onClick}
        disabled={options.disabled}
      >
        <span className="p-3 table-previus"></span>
      </button>
    );
  },
  NextPageLink: (options: PaginatorNextPageLinkOptions) => {
    return (
      <button
        type="button"
        className={classNames(options.className, "border-round")}
        onClick={options.onClick}
        disabled={options.disabled}
      >
        <span className="p-3 table-next"></span>
      </button>
    );
  },
  PageLinks: (options: PaginatorPageLinksOptions) => {
    if (
      (options.view.startPage === options.page &&
        options.view.startPage !== 0) ||
      (options.view.endPage === options.page &&
        options.page + 1 !== options.totalPages)
    ) {
      const className = classNames(options.className, { "p-disabled": true });

      return (
        <span className={className} style={{ userSelect: "none" }}>
          ...
        </span>
      );
    }

    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
      >
        {options.page + 1}
      </button>
    );
  },
};

// Metodo que genera el elemento del icono
const ActionComponent = (props: {
  row: any;
  actions: ITableAction<any>[];
}): React.JSX.Element => {
  return (
    <div className="spc-table-action-button">
      {props.actions.map((action, index) => (
        <div
          style={{ display: action.hide ? "none" : "block" }}
          key={index}
          onClick={() => action.onClick(props.row)}
        >
          {action.customIcon ? (
            <div className="button grid-button button-link">
              {action.customIcon()}
            </div>
          ) : typeof action.icon === "function" ? (
            (() => {
              const iconResult = action.icon(props.row);
              return getIconElement(iconResult, "src");
            })()
          ) : (
            getIconElement(action.icon, "src")
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(TableComponent);
