import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingDown, TrendingUp } from "lucide-react";
import numeral from "numeral";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Componente que muestra un resumen de compras en un panel de control
const CardPurchaseSummary = () => {
  // Llama a una query para obtener las métricas del dashboard, incluyendo datos de compra
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || []; // Extrae los datos de resumen de compras, si están disponibles

  // Obtiene el último punto de datos (última entrada en el resumen de compras)
  const lastDataPoint = purchaseData[purchaseData.length - 1] || null;

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
      {isLoading ? (
        // Muestra un mensaje de "Cargando..." mientras los datos están siendo recuperados
        <div className="m-5">Cargando...</div>
      ) : (
        <>
          {/* HEADER - Encabezado de la tarjeta */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Resumen de Compras
            </h2>
            <hr />
          </div>

          {/* BODY - Contenido principal de la tarjeta */}
          <div>
            {/* BODY HEADER - Muestra el total de compras y el porcentaje de cambio */}
            <div className="mb-4 mt-7 px-7">
              <p className="text-xs text-gray-400">Comprados</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {/* Formatea y muestra el total de compras usando la última entrada de datos */}
                  {lastDataPoint
                    ? numeral(lastDataPoint.totalPurchased).format("$0.00a")
                    : "0"}
                </p>
                {lastDataPoint && (
                  <p
                    className={`text-sm ${
                      lastDataPoint.changePercentage! >= 0
                        ? "text-green-500" // Muestra verde si el cambio es positivo
                        : "text-red-500" // Muestra rojo si el cambio es negativo
                    } flex ml-3`}
                  >
                    {/* Muestra un ícono de tendencia y el porcentaje de cambio */}
                    {lastDataPoint.changePercentage! >= 0 ? (
                      <TrendingUp className="w-5 h-5 mr-1" />
                    ) : (
                      <TrendingDown className="w-5 h-5 mr-1" />
                    )}
                    {Math.abs(lastDataPoint.changePercentage!)}%
                  </p>
                )}
              </div>
            </div>
            {/* CHART - Gráfico de área que muestra la tendencia de compras */}
            <ResponsiveContainer width="100%" height={180} className="p-2">
              <AreaChart
                data={purchaseData} // Datos del gráfico
                margin={{ top: 0, right: 0, left: -50, bottom: 45 }}
              >
                {/* Ejes del gráfico (ocultos) */}
                <XAxis dataKey="date" tick={false} axisLine={false} />
                <YAxis tickLine={false} tick={false} axisLine={false} />
                {/* Tooltip que muestra información al pasar el mouse sobre el gráfico */}
                <Tooltip
                  formatter={(value: number) => [
                    `$${value.toLocaleString("es")}`,
                  ]}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return date.toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                  }}
                />
                {/* Área del gráfico que muestra el total de compras a lo largo del tiempo */}
                <Area
                  type="linear"
                  dataKey="totalPurchased"
                  stroke="#8884d8"
                  fill="#8884d8"
                  dot={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default CardPurchaseSummary;
